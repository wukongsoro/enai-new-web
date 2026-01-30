import { Metadata } from "next";
import AccessGate from "./access-gate";
import QatarSummit2026Content from "./page-content";

export const metadata: Metadata = {
    title: "Web Summit Qatar 2026 | ENAI - Meet Us in Doha",
    description: "Meet the ENAI team at Web Summit Qatar 2026 in Doha, February 1-4. ENAI is the autonomous revenue platform that transforms how enterprises generate pipeline. Save $300K-$500K annually.",
    keywords: "Web Summit Qatar 2026, ENAI, autonomous revenue, AI sales platform, enterprise AI, Doha conference, investor meeting, autonomous revenue execution",
    openGraph: {
        title: "Meet ENAI at Web Summit Qatar 2026 | Doha",
        description: "Schedule an exclusive meeting with ENAI leadership at Web Summit Qatar 2026. Discover the autonomous revenue platform transforming enterprise sales.",
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
