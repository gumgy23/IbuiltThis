"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { BuildingIcon } from "lucide-react"

export default function CustomUserButton() {
    return (
        <UserButton>
            <UserButton.UserProfilePage 
                label = "Organization" labelIcon={
                <BuildingIcon className="size-4"/>
                }
                url="/organizations">
                    <div className="p-4">
                        <h2>Manage Organization</h2>
                            <OrganizationSwitcher
                                hidePersonal={true}
                                afterCreateOrganizationUrl={"/submit"}
                                afterSelectOrganizationUrl={"/submit"}
                                appearance={{
                                elemet: {
                                    rootBox: "w-full"
                                }
                            }}
                        />
                    </div>
            </UserButton.UserProfilePage>
        </UserButton>
    );
}