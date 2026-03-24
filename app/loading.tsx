import { Card, CardContent } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mb-4"></div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Loading...</h2>
          <p className="text-sm text-gray-600 text-center">Please wait while we prepare your content.</p>
        </CardContent>
      </Card>
    </div>
  )
}
