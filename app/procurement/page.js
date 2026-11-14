import TopicView from "@/components/content/TopicView";
import { topics } from "@/data/topics";
import { buildMeta } from "@/lib/metadata";

const topic = topics.procurement;

export const metadata = buildMeta({
  title: topic.title,
  description: topic.description,
  path: topic.path,
});

export default function ProcurementPage() {
  return <TopicView topic={topic} />;
}
