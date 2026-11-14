import TopicView from "@/components/content/TopicView";
import { topics } from "@/data/topics";
import { buildMeta } from "@/lib/metadata";

const topic = topics.infrastructure;

export const metadata = buildMeta({
  title: topic.title,
  description: topic.description,
  path: topic.path,
});

export default function InfrastructurePage() {
  return <TopicView topic={topic} />;
}
