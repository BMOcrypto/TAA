import type { Metadata } from "next"
import Link from "next/link"
import { Plus, Edit, Eye, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { requireAuth } from "@/lib/auth"
import { getAllResources } from "@/lib/resources"
import { AdminHeader } from "@/components/admin/admin-header"
import { DeleteResourceButton } from "@/components/admin/delete-resource-button"

export const metadata: Metadata = {
  title: "Manage Resources - Scaled CMS",
  description: "Manage downloadable resources and content",
}

export default async function ManageResourcesPage() {
  const user = await requireAuth()
  const resources = await getAllResources()

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader user={user} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Resources</h1>
            <p className="text-gray-600">Create and manage downloadable content</p>
          </div>
          <Button asChild>
            <Link href="/admin/resources/new">
              <Plus className="h-4 w-4 mr-2" />
              New Resource
            </Link>
          </Button>
        </div>

        {resources.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Download className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources yet</h3>
              <p className="text-gray-600 mb-6">Get started by creating your first resource.</p>
              <Button asChild>
                <Link href="/admin/resources/new">Create First Resource</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{resource.category}</Badge>
                    <Badge variant={resource.published ? "default" : "secondary"}>
                      {resource.published ? "Published" : "Draft"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="capitalize">{resource.type}</span>
                    <span>{resource.format}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{resource.downloadCount} downloads</span>
                    <span>{new Date(resource.createdAt).toLocaleDateString()}</span>
                  </div>

                  {resource.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  <div className="flex items-center space-x-2 pt-2">
                    {resource.published && (
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/resources/${resource.id}`}>
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Link>
                      </Button>
                    )}
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/admin/resources/${resource.id}/edit`}>
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <DeleteResourceButton resourceId={resource.id} resourceTitle={resource.title} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
