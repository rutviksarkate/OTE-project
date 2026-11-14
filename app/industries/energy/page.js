import TopicView from "@/components/content/TopicView";
import { topics } from "@/data/topics";
import { buildMeta } from "@/lib/metadata";

const topic = topics.energy;

export const metadata = buildMeta({
  title: topic.title,
  description: topic.description,
  path: topic.path,
});

export default function EnergyPage() {
  return <TopicView topic={topic} />;
}
