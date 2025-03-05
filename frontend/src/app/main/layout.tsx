import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <title>BlockChain Buildings</title>
        </head>
        <body>{children}</body>
      </html>
    )
  }