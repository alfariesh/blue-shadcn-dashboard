
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/ModeToggle"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            A beautiful dashboard built with shadcn/ui, featuring a blue theme that works perfectly in both light and dark modes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Login Page</CardTitle>
              <CardDescription>
                Check out the beautiful login form built with shadcn login-02 block
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/login">View Login Page</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                Explore the full dashboard with sidebar navigation built with shadcn sidebar-07 block
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Toggle between light and dark themes using the button in the top right corner
          </p>
        </div>
      </div>
    </div>
  )
}

export default Index
