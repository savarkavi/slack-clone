"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useWorkspaceModalState } from "../store/use-workspace-modal-state";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateWorkspaceModal = () => {
  const [open, setOpen] = useWorkspaceModalState();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a Workspace</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4 items-end">
          <Input placeholder="Give your workspace a title" required />
          <Button>Create</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkspaceModal;
