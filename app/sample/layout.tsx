import React from "react";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <h1>Hello world!</h1>
                <main>{children}</main>
            </body>
        </html>
    )
}