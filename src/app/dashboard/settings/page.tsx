"use client";

import React from "react";
import { Card } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold md:text-3xl font-headline">
        Settings
      </h1>

      {/* Grid Layout for Settings Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Example Card 1 */}
        <Card>
          <div className="p-4">
            <h2 className="text-lg font-medium">General Settings</h2>
            <p className="text-sm text-muted-foreground">
              Manage account preferences, notifications, and more.
            </p>
          </div>
        </Card>

        {/* Example Card 2 */}
        <Card>
          <div className="p-4">
            <h2 className="text-lg font-medium">Billing & Payments</h2>
            <p className="text-sm text-muted-foreground">
              View invoices, update payment methods, and track usage.
            </p>
          </div>
        </Card>

        {/* Example Card 3 */}
        <Card>
          <div className="p-4">
            <h2 className="text-lg font-medium">Checklists</h2>
            <p className="text-sm text-muted-foreground">
              Create and manage event, hospitality, training, and sustainability
              checklists.
            </p>
          </div>
        </Card>

        {/* Example Card 4 */}
        <Card>
          <div className="p-4">
            <h2 className="text-lg font-medium">User Management</h2>
            <p className="text-sm text-muted-foreground">
              Add, remove, or assign roles to team members.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
