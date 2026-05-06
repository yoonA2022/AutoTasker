import { Button } from "@heroui/react";
import { Globe, Plus, Mail, Trash2 } from "lucide-react";

export function App() {
    return (
        <div className="flex flex-wrap gap-3">
            <Button>
                <Globe />
                Search
            </Button>
            <Button variant="secondary">
                <Plus />
                Add Member
            </Button>
            <Button variant="tertiary">
                <Mail />
                Email
            </Button>
            <Button variant="danger">
                <Trash2 />
                Delete
            </Button>
        </div>
    );
}
