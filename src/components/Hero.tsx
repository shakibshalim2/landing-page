"use client";

import { ArrowRight, Play, Calendar, Shield, Clock, Users } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-white to-white" />
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2394a3b8' fill-opacity='0.05'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating accent shapes */}
      <div className="absolute top-20 right-[15%] w-72 h-72 bg-teal-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[10%] w-56 h-56 bg-cyan-100/40 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Text */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-teal-400 to-cyan-400",
                  "bg-gradient-to-br from-blue-400 to-indigo-400",
                  "bg-gradient-to-br from-amber-400 to-orange-400",
                ].map((color, i) => (
                  <div key={i} className={`w-6 h-6 rounded-full ${color} border-2 border-white flex items-center justify-center`}>
                    <span className="text-[8px] text-white font-bold">{["S", "M", "K"][i]}</span>
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-600">
                <span className="font-semibold text-slate-900">2,000+</span> healthcare pros
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Healthcare management{" "}
              <span className="relative">
                <span className="text-teal-600">made simple</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C47.6667 1.83333 141.6 -2.4 199 5.5" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              The all-in-one platform that helps doctors and patients connect seamlessly. 
              Schedule appointments, manage records, and communicate—all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Start free trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("features")}
              >
                <Play className="w-4 h-4" />
                Watch demo
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              {[
                { icon: Users, label: "Active users", value: "50K+" },
                { icon: Calendar, label: "Appointments/mo", value: "100K+" },
                { icon: Shield, label: "Uptime", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Dashboard Preview */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-6 bg-white rounded-md border border-slate-200 flex items-center px-3">
                      <span className="text-[10px] text-slate-400">app.carenest.com/dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "Today's Patients", value: "12", change: "+3", color: "text-teal-600" },
                      { label: "Pending", value: "4", change: "2 urgent", color: "text-amber-600" },
                      { label: "Completed", value: "8", change: "+12%", color: "text-emerald-600" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-slate-50 rounded-xl p-3">
                        <p className="text-[10px] text-slate-500 mb-0.5">{stat.label}</p>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                          <span className="text-[9px] text-slate-400">{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Appointments list */}
                  <div className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-slate-700">Upcoming</p>
                      <button className="text-[10px] text-teal-600 font-medium">View all</button>
                    </div>
                    <div className="space-y-2">
                      {[
                        { time: "9:00 AM", name: "Sarah Johnson", type: "Check-up", avatar: "SJ" },
                        { time: "10:30 AM", name: "Michael Chen", type: "Follow-up", avatar: "MC" },
                        { time: "2:00 PM", name: "Emily Davis", type: "Consultation", avatar: "ED" },
                      ].map((apt) => (
                        <div key={apt.time} className="flex items-center gap-3 p-2 bg-white rounded-lg border border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
                            <span className="text-[10px] text-white font-bold">{apt.avatar}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-slate-800 truncate">{apt.name}</p>
                            <p className="text-[10px] text-slate-500">{apt.type}</p>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-1 bg-teal-50 rounded-md">
                            <Clock className="w-3 h-3 text-teal-600" />
                            <span className="text-[10px] font-medium text-teal-700">{apt.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl p-3 shadow-lg shadow-slate-200/50 border border-slate-100 animate-float max-w-[180px]">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800 mb-0.5">New Booking</p>
                    <p className="text-[10px] text-slate-500">Dr. Mitchell • Tomorrow 9 AM</p>
                  </div>
                </div>
              </div>

              {/* Shield badge */}
              <div className="absolute -top-3 -right-3 lg:-right-6 bg-white rounded-xl p-2.5 shadow-lg shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-800">HIPAA</p>
                    <p className="text-[9px] text-slate-500">Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
