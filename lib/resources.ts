export interface Resource {
  id: string
  title: string
  description: string
  type: "guide" | "template" | "checklist" | "ebook" | "whitepaper"
  category: string
  downloadUrl: string
  fileSize: string
  published: boolean
  downloads: number
  createdAt: string
  updatedAt: string
  tags: string[]
  image?: string
}

// Mock resources data - in production, this would come from a database or CMS
const mockResources: Resource[] = [
  {
    id: "1",
    title: "HubSpot Implementation Checklist",
    description: "A comprehensive checklist to ensure successful HubSpot implementation for your business.",
    type: "checklist",
    category: "Implementation",
    downloadUrl: "/resources/hubspot-implementation-checklist.pdf",
    fileSize: "2.3 MB",
    published: true,
    downloads: 1247,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    tags: ["HubSpot", "Implementation", "Checklist", "Setup"],
    image: "/placeholder.svg?height=300&width=400&text=Implementation+Checklist",
  },
  {
    id: "2",
    title: "CRM Migration Template",
    description: "Step-by-step template for migrating your data from any CRM to HubSpot.",
    type: "template",
    category: "Migration",
    downloadUrl: "/resources/crm-migration-template.xlsx",
    fileSize: "1.8 MB",
    published: true,
    downloads: 892,
    createdAt: "2023-12-15",
    updatedAt: "2024-01-05",
    tags: ["CRM", "Migration", "Template", "Data"],
    image: "/placeholder.svg?height=300&width=400&text=Migration+Template",
  },
  {
    id: "3",
    title: "Marketing Automation Playbook",
    description: "Complete guide to setting up and optimizing marketing automation workflows.",
    type: "guide",
    category: "Marketing",
    downloadUrl: "/resources/marketing-automation-playbook.pdf",
    fileSize: "4.7 MB",
    published: true,
    downloads: 634,
    createdAt: "2023-12-01",
    updatedAt: "2023-12-01",
    tags: ["Marketing", "Automation", "Workflows", "Guide"],
    image: "/placeholder.svg?height=300&width=400&text=Automation+Playbook",
  },
  {
    id: "4",
    title: "Sales Pipeline Optimization Ebook",
    description: "Learn how to optimize your sales pipeline for maximum conversion and revenue.",
    type: "ebook",
    category: "Sales",
    downloadUrl: "/resources/sales-pipeline-optimization.pdf",
    fileSize: "6.2 MB",
    published: true,
    downloads: 423,
    createdAt: "2023-11-20",
    updatedAt: "2023-11-20",
    tags: ["Sales", "Pipeline", "Optimization", "Revenue"],
    image: "/placeholder.svg?height=300&width=400&text=Pipeline+Optimization",
  },
  {
    id: "5",
    title: "HubSpot Reporting Dashboard Templates",
    description: "Pre-built dashboard templates for tracking key metrics in HubSpot.",
    type: "template",
    category: "Analytics",
    downloadUrl: "/resources/reporting-dashboard-templates.zip",
    fileSize: "3.1 MB",
    published: false,
    downloads: 0,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-10",
    tags: ["HubSpot", "Reporting", "Dashboard", "Analytics"],
    image: "/placeholder.svg?height=300&width=400&text=Dashboard+Templates",
  },
]

export async function getAllResources(): Promise<Resource[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockResources
}

export async function getPublishedResources(): Promise<Resource[]> {
  const resources = await getAllResources()
  return resources.filter((resource) => resource.published)
}

export async function getResourceById(id: string): Promise<Resource | null> {
  const resources = await getAllResources()
  return resources.find((resource) => resource.id === id) || null
}

export async function getResourcesByCategory(category: string): Promise<Resource[]> {
  const resources = await getPublishedResources()
  return resources.filter((resource) => resource.category.toLowerCase() === category.toLowerCase())
}

export async function getResourcesByType(type: Resource["type"]): Promise<Resource[]> {
  const resources = await getPublishedResources()
  return resources.filter((resource) => resource.type === type)
}

export async function createResource(
  resourceData: Omit<Resource, "id" | "downloads" | "createdAt" | "updatedAt">,
): Promise<Resource> {
  // In production, this would save to a database
  const newResource: Resource = {
    ...resourceData,
    id: Date.now().toString(),
    downloads: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  mockResources.unshift(newResource)
  return newResource
}

export async function updateResource(id: string, resourceData: Partial<Resource>): Promise<Resource | null> {
  // In production, this would update in a database
  const resourceIndex = mockResources.findIndex((resource) => resource.id === id)

  if (resourceIndex === -1) {
    return null
  }

  mockResources[resourceIndex] = {
    ...mockResources[resourceIndex],
    ...resourceData,
    updatedAt: new Date().toISOString(),
  }

  return mockResources[resourceIndex]
}

export async function deleteResource(id: string): Promise<boolean> {
  // In production, this would delete from a database
  const resourceIndex = mockResources.findIndex((resource) => resource.id === id)

  if (resourceIndex === -1) {
    return false
  }

  mockResources.splice(resourceIndex, 1)
  return true
}

export async function incrementDownloadCount(id: string): Promise<void> {
  // In production, this would update the download count in a database
  const resource = mockResources.find((r) => r.id === id)
  if (resource) {
    resource.downloads += 1
  }
}

export function getResourceCategories(): string[] {
  return ["Implementation", "Migration", "Marketing", "Sales", "Analytics", "Training"]
}

export function getResourceTypes(): Resource["type"][] {
  return ["guide", "template", "checklist", "ebook", "whitepaper"]
}

export async function saveResource(resourceData: Resource): Promise<Resource> {
  // In production, this would save to a database
  const existingIndex = mockResources.findIndex((resource) => resource.id === resourceData.id)

  if (existingIndex === -1) {
    // Create new resource
    mockResources.unshift(resourceData)
    return resourceData
  } else {
    // Update existing resource
    mockResources[existingIndex] = {
      ...resourceData,
      updatedAt: new Date().toISOString(),
    }
    return mockResources[existingIndex]
  }
}
