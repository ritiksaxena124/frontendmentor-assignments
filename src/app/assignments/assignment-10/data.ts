import {
  Bell,
  Bug,
  Cloud,
  Code,
  Compass,
  Cpu,
  Database,
  Eye,
  FileCode,
  Globe,
  Key,
  Layers,
  LucideIcon,
  Monitor,
  Palette,
  Rocket,
  Search,
  Shield,
  Sun,
  Wifi,
  Zap,
} from "lucide-react";

export const filterButtons = [
  {
    label: "All",
    action: "all",
  },
  {
    label: "Active",
    action: "active",
  },
  {
    label: "Inactive",
    action: "inactive",
  },
];

interface IExtensionData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  active: boolean;
}
export const extensionsData: IExtensionData[] = [
  {
    id: 1,
    title: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    icon: Sun,
    active: true,
  },
  {
    id: 2,
    title: "StyleSpy",
    description:
      "Instantly analyze and copy CSS styles from any webpage element.",
    icon: Eye,
    active: true,
  },
  {
    id: 3,
    title: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    icon: Zap,
    active: false,
  },
  {
    id: 4,
    title: "SecureBrowse",
    description: "Blocks malicious scripts and trackers for safer browsing.",
    icon: Shield,
    active: true,
  },
  {
    id: 5,
    title: "CodeMate",
    description: "Provides inline syntax highlighting and quick code snippets.",
    icon: Code,
    active: true,
  },
  {
    id: 6,
    title: "AI Optimizer",
    description:
      "Analyzes your workflow and suggests performance improvements.",
    icon: Cpu,
    active: false,
  },
  {
    id: 7,
    title: "CloudSync",
    description: "Syncs all your browser data and extensions across devices.",
    icon: Cloud,
    active: true,
  },
  {
    id: 8,
    title: "NetWatch",
    description: "Monitors network requests and visualizes API performance.",
    icon: Wifi,
    active: false,
  },
  {
    id: 9,
    title: "ColorPeek",
    description: "Pick, preview, and copy colors from any webpage element.",
    icon: Palette,
    active: true,
  },
  {
    id: 10,
    title: "PixelPerfect",
    description: "Align UI elements with precision using visual grid overlays.",
    icon: Monitor,
    active: true,
  },
  {
    id: 11,
    title: "LinkTracker",
    description: "Tracks clicked links and provides engagement analytics.",
    icon: Compass,
    active: false,
  },
  {
    id: 12,
    title: "DeepSearch",
    description: "Search through page content and metadata instantly.",
    icon: Search,
    active: true,
  },
  {
    id: 13,
    title: "KeyGuard",
    description: "Securely stores and autofills your passwords across sites.",
    icon: Key,
    active: true,
  },
  {
    id: 14,
    title: "DataVault",
    description: "Encrypts and backs up your browser storage automatically.",
    icon: Database,
    active: false,
  },
  {
    id: 15,
    title: "SnippetBox",
    description: "Save and organize your favorite code snippets on the go.",
    icon: FileCode,
    active: true,
  },
  {
    id: 16,
    title: "BugSniper",
    description:
      "Find and fix frontend bugs directly from your browser console.",
    icon: Bug,
    active: true,
  },
  {
    id: 17,
    title: "NotifyMe",
    description: "Stay updated with real-time notifications from your tools.",
    icon: Bell,
    active: false,
  },
  {
    id: 18,
    title: "WorldView",
    description: "Translate web content and detect language automatically.",
    icon: Globe,
    active: true,
  },
  {
    id: 19,
    title: "LayerBoard",
    description: "Visualize DOM layers and z-index stacking in real-time.",
    icon: Layers,
    active: true,
  },
  {
    id: 20,
    title: "LaunchPad",
    description: "Manage and launch your favorite development tools quickly.",
    icon: Rocket,
    active: false,
  },
];
