import React, { FC } from "react";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { LucideIcon } from "lucide-react";

interface IExtensionCardProps {
    item: {
        id: number;
        title: string;
        description: string;
        icon: LucideIcon;
        active: boolean;
    },
    handleExtensionStatus: (id: number) => void
}

const ExtensionCard: FC<IExtensionCardProps> = (props) => {
    const IconComponent = props.item.icon;
    return (
        <div className={`bg-background max-w-sm h-56 border border-zinc-100 rounded-lg p-4 relative flex flex-col justify-between gap-2`}>
            <div className="flex gap-4 ">
                <span className="p-1">
                    <IconComponent />
                </span>
                <div className="space-y-1 flex-grow"><p className={`font-semibold text-lg text-primary`}>{props.item.title}</p>
                    <p className="text-sm text-zinc-500">{props.item.description}</p></div>
            </div>
            <div className="flex gap-4 justify-between items-center">
                <Button variant={'outline'} className={`rounded-full text-sm text-primary`}>Remove</Button>
                <Switch id="extension status" checked={props.item.active} onClick={() => props.handleExtensionStatus(props.item.id)} />
            </div>
        </div>
    )
}

export default ExtensionCard;