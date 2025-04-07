"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { X } from "lucide-react";
import { Drawer as VaulSidebar } from "vaul";
import { cn } from "../../../lib/utils"; // make sure this util exists or remove it

const DrawerContext = createContext(undefined);

const useSidebarDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useSidebarDrawer must be used within a DrawerProvider");
  }
  return context;
};

export function SidebarDrawer({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  direction = "left",
  outsideClose = true,
  className,
  triggerClassName,
  DefaultTrigger,
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen =
    controlledSetOpen !== undefined ? controlledSetOpen : setInternalOpen;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (event) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      <>
        {DefaultTrigger && (
          <div onClick={() => setOpen(true)}>{DefaultTrigger()}</div>
        )}

        <VaulSidebar.Root
          open={open}
          direction={direction}
          onOpenChange={setOpen}
          dismissible={isDesktop ? false : true}
        >
          <VaulSidebar.Portal>
            <VaulSidebar.Overlay
              className="fixed inset-0 dark:bg-black/40 bg-white/50 backdrop-blur-sm z-50"
              onClick={() => setOpen(false)}
            />
            <VaulSidebar.Content
              className={cn(
                `border-l z-50 ${
                  outsideClose
                    ? "sm:w-[450px] w-[90%] h-full dark:bg-zinc-950 bg-zinc-100"
                    : "w-full h-full"
                } fixed bottom-0 ${
                  direction === "right" ? "right-0" : "left-0"
                }`,
                className
              )}
            >
              <div
                className={`${
                  outsideClose
                    ? "w-full h-full"
                    : "dark:bg-gray-900 bg-white border-r sm:w-[450px] w-[90%] h-full"
                }`}
              >
                {isDesktop ? (
                  <button
                    className="flex justify-end w-full absolute right-2 top-2"
                    onClick={() => setOpen(false)}
                  >
                    <X />
                  </button>
                ) : (
                  <div
                    className={`absolute top-[40%] ${
                      direction === "right" ? "left-2" : "right-2"
                    } mx-auto h-16 w-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4`}
                  />
                )}
                {children}
              </div>
            </VaulSidebar.Content>
          </VaulSidebar.Portal>
        </VaulSidebar.Root>
      </>
    </DrawerContext.Provider>
  );
}

export function DrawerContent({ children }) {
  return <>{children}</>;
}
