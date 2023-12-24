---
sidebar_position: 1
---

# Introduction

A good dApp — you know it when you see it, right? You never notice any waiting times, it's available whenever you need it, transactions never fail, and, of course, errors are nowhere to be found. But measuring your dApp's performance is tricky, and improving it is even trickier.

This tutorial walks you through how to use Encinitas to improve your dApp's experience. To get started, you'll instrument your dApp. Instrumenting means measuring the actual end-user experience for each visit. From there, you'll learn how to evaluate your dApp's performance today, where you can improve it, and how you can keep an eye on things in future.

## Capture dApp key information

Before you can improve your dApp's performance, you need data to make informed decisions about what your dApp needs. Encinitas monitoring always starts with your deployed Smart Contracts, or a collecting data from their executions in the Solana network and reporting back to Encinitas.

To monitor the frontend of your website, you'll want to use our browser monitoring agent integration. It's a small snippet of JavaScript that you'll include in your HTML head, very similar to Google Analytics or other scripts.

## Analyze dApp performance
Once you've instrumented your dApp, you can overview your dApp's performance with different types of data.

- Core dApp vitals. These are metrics that give you insight into your dApp user experience. Low scores often indicate a poor experience, which can deteriorate your relationship with your end users.
- High latency. This can frustrate your users and cause them to stop using your dApp altogether.
- Transaction errors. This can cause a number of issues with your dApp, any one of which could negatively impact the frontend experience for your customers. Encinitas dedicates an entire errors page for your dApp.
- Benchmarks. dApp performance can dip below acceptable levels without necessarily causing major errors. You can create service-level benchmarks to help track your dApps performance, and identify issues before they become problems.
