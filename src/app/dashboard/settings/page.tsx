"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function SettingsPage() {
  // State for forms
  const [email, setEmail] = useState("");
  const [checklistName, setChecklistName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold md:text-3xl font-headline">Settings</h1>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* General Settings */}
        <Card>
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-medium">General Settings</h2>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Enable Notifications</Label>
              <Switch />
            </div>
            <Button className="w-full">Save Settings</Button>
          </div>
        </Card>

        {/* Billing & Payments */}
        <Card>
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-medium">Billing & Payments</h2>
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Credit / Debit Card</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">Update Payment Method</Button>
          </div>
        </Card>

        {/* Checklist Creation */}
        <Card>
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-medium">Checklist Builder</h2>
            <div className="space-y-2">
              <Label>Checklist Name</Label>
              <Input
                placeholder="e.g. Wedding - Haldi Ceremony"
                value={checklistName}
                onChange={(e) => setChecklistName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Checklist Items</Label>
              <Textarea placeholder="Add checklist items, one per line" />
            </div>
            <Button className="w-full">Save Checklist</Button>
          </div>
        </Card>

        {/* User Management */}
        <Card>
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-medium">User Management</h2>
            <div className="space-y-2">
              <Label>Add Team Member</Label>
              <Input type="email" placeholder="team@example.com" />
            </div>
            <Button className="w-full">Invite User</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
