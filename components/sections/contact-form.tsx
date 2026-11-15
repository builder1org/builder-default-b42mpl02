"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="bg-card border-border space-y-5 rounded-xl border p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {submitted ? (
        <p className="text-primary text-sm font-medium" role="status">
          پیام شما ثبت شد (نمایشی). برای اتصال واقعی فرم، سرویس ایمیل یا CRM
          اضافه کنید.
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">نام</Label>
          <Input id="name" name="name" placeholder="نام و نام خانوادگی" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">تلفن</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="۰۹۱۲۰۰۰۰۰۰۰"
            dir="ltr"
            className="text-left"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">ایمیل</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          dir="ltr"
          className="text-left"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">پیام</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="سؤال درباره سایز، موجودی یا سفارش ویژه..."
          required
        />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        ارسال پیام
      </Button>
    </form>
  );
}