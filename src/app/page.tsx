"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useWorkspaceModalState } from "@/features/workspaces/store/use-workspace-modal-state";
import { useEffect, useMemo } from "react";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  const [open, setOpen] = useWorkspaceModalState();

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      setOpen(false);
      console.log("You have workspaces");
    } else {
      setOpen(true);
      console.log("You dont have workspaces");
    }
  }, [workspaceId, isLoading, setOpen, open]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
