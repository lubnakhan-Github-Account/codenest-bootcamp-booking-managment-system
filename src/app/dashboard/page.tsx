
import { BarChart3, Bell, Calendar, CreditCard, DollarSign, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
       <div className="w-64 bg-gray-100"> 
        <div className="flex h-16 items-end border-2 rounded-[12px] px-4 pb-4 bg-white">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Booking System</h1>
          </div>
        </div>
        
         <div className="w-65 h-[575px] border-2 bg-gray-50 rounded-xl mt-[10px]"> 
        <nav className="p-2">
          <Link href="/dashboard" className="flex items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-gray-900">
            <BarChart3 className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/booking"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <Calendar className="h-5 w-5" />
            <span>Booking</span>
          </Link>
          <Link
            href="/customer"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <Users className="h-5 w-5" />
            <span>Customer</span>
          </Link>
          <Link
            href="/setting"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            <span>Setting</span>
          </Link>
        </nav>
       </div> 
       </div>  
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto px-2">
        <header className="flex h-16 items-end justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4 pb-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <button className="rounded-full bg-gray-100 p-2">
            <Bell className="h-5 w-5" />
          </button>
        </header>

        <main className="p-4">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Up coming bookings</h2>
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">12</p>
              <p className="text-sm text-gray-500">+2 from yesterday</p>
            </div>

            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Pending Payments</h2>
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">$ 2,350</p>
              <p className="text-sm text-gray-500">3 payments awaiting</p>
            </div>

            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Total Revenue</h2>
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <p className="mt-2 text-2xl font-bold">$ 12,234</p>
              <p className="text-sm text-gray-500">+8% from last month</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <div className="flex">
              <button className="border-1 bg-white px-4 py-2 font-medium">Notification</button>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-100">Today's booking</button>
            </div>
          </div>

          {/* Notifications */}
          <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Recent Notification</h2>
            <p className="text-gray-500">You have 4 unread notifications</p>

            <div className="mt-4 space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                      <Calendar className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Booking Cancelation</h3>
                      <p className="text-gray-500">John smith has canceled their booking for tomorrow at 2:00 PM</p>
                      <p className="text-sm text-gray-400">10 minutes ago</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white">New</span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Calendar className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">New Booking</h3>
                      <p className="text-gray-500">Sarah Johnson has made a new booking on friday 10:00 AM</p>
                      <p className="text-sm text-gray-400">1 hour ago</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white">New</span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                      <CreditCard className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Payment Received</h3>
                      <p className="text-gray-500">You've received a payment of $ 150 from Micheal Brown</p>
                      <p className="text-sm text-gray-400">3 hours ago</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white">New</span>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">New Costumers</h3>
                      <p className="text-gray-500">Emma Willson has created a new account</p>
                      <p className="text-sm text-gray-400">5 hours ago</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-black px-3 py-1 text-xs text-white">New</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
     </div> 
    
  )
}
