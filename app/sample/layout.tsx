import React from "react";
import Link from "next/link";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="test">
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <h1>Hello world!</h1>
                <main>{children}</main>
                <b>Hello Next.js!</b>
                <br></br>
                <Link href={'/'}>TOPページへ</Link>
            </body>
        </html>
    )
}