"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

const THEMES = {
  light: "",
  dark: ".dark",
} as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  } & (
    | {
        color?: string
        theme?: never
      }
    | {
        color?: never
        theme: Record<keyof typeof THEMES, string>
      }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const chartConfig = React.useMemo(
    () => {
      return Object.fromEntries(
        Object.entries(config).map(([key, value]) => {
          const newTheme =
            value.theme ??
            Object.fromEntries(
              Object.entries(THEMES).map(([theme]) => [
                theme,
                `var(--color-${key})`,
              ])
            )

          return [
            key,
            {
              ...value,
              theme: newTheme,
            },
          ]
        })
      ) as ChartConfig
    },
    [config]
  )

  return (
    <ChartContext.Provider value={{ config: chartConfig }}>
      <div
        data-chart
        className={cn(
          "flex aspect-video justify-center gap-4 [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke-width='1']]:stroke-transparent [&_.recharts-layer:focus-visible]:outline-none [&_.recharts-polar-axis-tick_text]:fill-muted-foreground [&_.recharts-polar-grid-concentric-polygon]:stroke-border/50 [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-responsive-container]:-mx-2 [&_.recharts-sector[stroke-width='1']]:stroke-transparent [&_.recharts-surface]:outline-none [&_.recharts-tooltip-wrapper]:z-50 [&_.recharts-tooltip-wrapper]:rounded-lg [&_.recharts-tooltip-wrapper]:border [&_.recharts-tooltip-wrapper]:bg-background/95 [&_.recharts-tooltip-wrapper]:text-sm [&_.recharts-tooltip-wrapper]:shadow-lg [&_.recharts-tooltip-wrapper]:backdrop-blur-sm",
          className
        )}
        ref={ref}
        {...props}
      >
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartLegend = RechartsPrimitive.Legend

type ChartLegendContentProps = Omit<
  React.ComponentProps<typeof RechartsPrimitive.Legend>,
  "formatter" | "content"
> & {
  className?: string
  payload?: any[]
  formatter?: (value: any, entry: any, index?: number) => React.ReactNode
}

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  (
    { className, formatter, payload = [], onMouseEnter, onMouseLeave, onClick },
    ref
  ) => {
    const { config } = useChart()

    if (!payload.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4 text-xs text-muted-foreground",
          className
        )}
        onMouseLeave={() => onMouseLeave?.({} as any)}
      >
        {payload.map((item, i) => {
          const key = item.dataKey as string
          const entry = config[key]
          const color = entry?.color ?? item.color
          const label = entry?.label ?? item.value
          const Icon = entry?.icon

          return (
            <div
              key={item.value}
              className="flex items-center gap-1.5"
              onMouseEnter={() => onMouseEnter?.(item as any)}
              onClick={() => onClick?.(item as any)}
            >
              {Icon ? (
                <Icon
                  className="mr-1 h-3 w-3"
                  style={
                    {
                      color,
                    } as React.CSSProperties
                  }
                />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: color,
                  }}
                />
              )}
              {formatter ? formatter(label, item, i) : label}
            </div>
          )
        })}
      </div>
    )
  }
)
ChartLegendContent.displayName = "ChartLegendContent"

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      payload?: any[]
      hideLabel?: boolean
      hideIndicator?: boolean
      indicator?: "line" | "dot" | "dashed"
      nameKey?: string
      labelKey?: string
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart()

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null
      }

      const item = payload[0]
      const key = `${labelKey || item.dataKey || ""}`
      const itemConfig = config[key as keyof typeof config]
      const value =
        !labelKey && typeof item.payload === "object" && item.payload
          ? item.payload[item.dataKey as keyof typeof item.payload]
          : item.value
      const name = label || item.name || value
      const L = item.payload.label

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(L, payload)}
          </div>
        )
      }

      if (!L) {
        return null
      }

      return <div className={cn("font-medium", labelClassName)}>{L}</div>
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ])

    if (!active || !payload?.length) {
      return null
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {tooltipLabel}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || ""}`
            const itemConfig = config[key as keyof typeof config]
            const indicatorColor = color || item.color || itemConfig?.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && item.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, payload)
                ) : (
                  <>
                    {!hideIndicator && (
                      <div
                        className={cn(
                          "shrink-0",
                          indicator === "dot" && "h-2.5 w-2.5 rounded-full",
                          indicator === "line" && "h-full w-0.5",
                          indicator === "dashed" && "my-0.5 h-full w-0.5 border-r border-dashed"
                        )}
                        style={{
                          background: indicatorColor,
                        }}
                      />
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        "items-center"
                      )}
                    >
                      <div className="grid flex-1 gap-1">
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
}
