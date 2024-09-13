"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";

export const EmptyBoards = () => {
    const { organization } = useOrganization();
    const create = useMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        create({
            orgId: organization.id,
            title: "Untitled"
        })
    }
    
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/note.svg"
                height={140}
                width={140}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            <p className="txt-muted-foreground text-sm mt-2">
                Start by craating a board for your organization
            </p>
            <div className="mt-6">
                <Button size="lg" onClick={onClick}>
                    Creat board
                </Button>
            </div>
        </div>
    );
};