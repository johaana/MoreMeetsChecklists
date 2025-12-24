
"use client"

import * as React from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend as LegendPrimitive,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ResponsiveContainer,
  Sector,
  Tooltip as TooltipPrimitive,
  XAxis,
  YAxis,
} from "recharts"
import {
  type ChartConfig,
  type ChartContainerProps,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart-primitive"

const Chart = ChartContainer

export {
  Chart,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  ChartStyle,
  type ChartConfig,
}
export {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LegendPrimitive,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  Rectangle,
  ResponsiveContainer,
  Sector,
  TooltipPrimitive,
  XAxis,
  YAxis,
}
