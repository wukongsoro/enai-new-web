import { Metadata } from "next";
import AccessGate from "./access-gate";
import QatarSummit2026Content from "./page-content";

export const metadata: Metadata = {
    title: "Web Summit Qatar 2026 | ENAI - Meet Us in Doha",
    description: "Meet the ENAI team at Web Summit Qatar 2026 in Doha, February 1-4. ENAI is the Revenue Operating System that improves how enterprises generate pipeline. Save $300K-$500K annually.",
    keywords: "Web Summit Qatar 2026, ENAI, revenue operating system, revenue platform, enterprise AI, Doha conference, investor meeting, governed revenue execution",
    openGraph: {
        title: "Meet ENAI at Web Summit Qatar 2026 | Doha",
        description: "Schedule an exclusive meeting with ENAI leadership at Web Summit Qatar 2026. Discover the Revenue Operating System improving enterprise sales.",
        type: "website",
    },
};

export default function QatarSummit2026Page() {
    return (
        <AccessGate>
            <QatarSummit2026Content />
        </AccessGate>
    );
}
