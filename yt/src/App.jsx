import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="rounded-2xl bg-white p-10 shadow-2xl flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
        <Button className="w-32" variant="default">Click me</Button>
      </div>
    </div>
  )
}

export default App
