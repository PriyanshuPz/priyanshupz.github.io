---
title: "Why I’m Shifting From TypeScript to Rust This Year"
date: 2026-02-12
description: "A personal reflection on why I’m shifting my primary focus from TypeScript to Rust."
read: "12 min"
tag: Tech
type: blog
---

This year I made a decision that feels uncomfortable but necessary. I’m shifting my primary focus from TypeScript to Rust.

This is not a dramatic rage-quit. It’s not “TypeScript is bad.” It’s not hype chasing. I still respect TypeScript. I still use it. The browser understands JavaScript and nothing else, so obviously TypeScript will always be part of modern development. But relying on it as my core long-term skill no longer feels right.

This shift is about depth. It’s about leverage. It’s about choosing friction now to gain strength later.

For the last few years, TypeScript has been comfortable. Extremely productive. You can build full-stack apps quickly. The ecosystem is massive. Documentation is everywhere. You hit a problem, search it, and there are already ten answers. AI tools autocomplete entire features in seconds. It feels like flying.

But that comfort started bothering me.

When something becomes that smooth, that frictionless, you have to ask yourself what is actually defensible about your skill.

The reality is this: AI models are exceptionally good at JavaScript and TypeScript. The training data is enormous. Patterns are repetitive. The runtime is forgiving. Even senior-level TypeScript code can be generated in seconds. That doesn’t make TypeScript useless. It just means the barrier to output is extremely low, for both humans and machines.

And when a skill becomes low-friction for machines, its long-term defensibility changes.

This is the uncomfortable part people avoid talking about.

If you are only building in a language that AI understands better than you do, you are competing with a tool that doesn’t get tired and doesn’t need context switches. That’s not a great long-term strategy.

So I started thinking differently.

What if instead of optimizing for speed of building, I optimize for depth of understanding?

That’s where Rust entered seriously.

Rust is not just another backend framework. It’s not a “Node alternative.” It’s a systems language. That distinction matters. With Rust you can build web servers, sure. But you can also build operating systems. Game engines. Networking stacks. Embedded firmware. Database engines. Compilers. You can compile to Linux, Windows, macOS, ARM, and even bare-metal. You can run without an operating system at all.

That changes how you think.

You are no longer just writing API routes. You are dealing with memory layout, ownership, concurrency models, lifetimes, deterministic behavior. You are closer to the machine. That proximity forces you to understand what is actually happening.

TypeScript is about developer experience. Rust is about system integrity.

And I’m starting to prefer system integrity.

One of the biggest reasons is how Rust handles correctness. The Rust compiler is relentless. People joke about the borrow checker, but it’s not just a technical feature. It’s a philosophy. The compiler does not trust you. Even if you are confident your program will work, Rust will question every edge case.

And this reminds me of something very simple.

The Rust compiler is like your mom.

Imagine you say, “I want to go on a road trip.”

You are confident. You have planned everything. You know how to drive. You are excited.

And your mom says, “What if the car crashes?”

You respond, “That won’t happen.”

She says, “What if it does?”

You say, “That’s hypothetical.”

She says, “Still. What if?”

That is Rust.

Even when you are sure everything is fine, Rust forces you to think about the hypothetical crash. What if this reference outlives its owner? What if this task shuts down mid-execution? What if this error isn’t handled? What if this memory is accessed concurrently? What if the network drops? What if the process exits early?

It doesn’t accept optimism. It demands preparation.

And that’s exhausting at first.

Rust is not dopamine-friendly. It does not give you the instant satisfaction that scripting languages do. You don’t just write code and watch it magically run. You fight the compiler. You refactor. You restructure. You rethink ownership. You redesign your data flow. Sometimes you feel like you are losing to a machine.

But something changes after a while.

You realize the compiler is not fighting you. It’s training you.

It forces you to think in systems. It forces you to think about failure before failure happens. It forces you to design intentionally. That kind of discipline is uncomfortable but powerful.

TypeScript gives you fast iteration. Rust gives you strong guarantees.

TypeScript gives you flexibility at runtime. Rust gives you certainty at compile time.

TypeScript gives you speed of shipping. Rust gives you durability of shipping.

And I started asking myself what I want more of.

Another major factor is deployment philosophy. I’ve grown tired of runtime stacks layered on runtime stacks. Node behind reverse proxies inside containers inside cloud abstractions. Hundreds of megabytes deployed for something that fundamentally just responds to HTTP requests.

With Rust, you can compile a backend and embed a compiled frontend into a single binary. No Node runtime. No reverse proxy required. No external dependencies. Copy the binary to a Raspberry Pi and run it. It works. It doesn’t ask what version of something is installed. It doesn’t need npm install. It doesn’t need Docker if you don’t want it.

That simplicity is addictive.

It feels honest.

You build something. You compile it. You ship the artifact. That artifact is the product. There is something clean about that model. One more thing is that it is a binary even if someone gets it. they cannot see the code that we can say is a security feature. 

Now, why not Go?

Go is good. I respect it. It compiles fast. It has strong concurrency primitives. It’s pragmatic. But for me, personally, it never felt expressive enough. The syntax feels procedural in a way that doesn’t match how I think. I come from an object-oriented background, and while Rust isn’t traditional OOP, its type system feels far more expressive and powerful.

More importantly, Go isn’t a systems language in the same sense. You cannot compile Go to true bare-metal targets the way you can with Rust. Rust’s reach is broader. That matters to me. I don’t want to just write web servers for the rest of my life. I want the option to go deeper.

This isn’t about language wars. It’s about surface area of capability.

Rust expands mine.

There’s also timing. Rust is modern but still relatively young in mainstream adoption. The market is growing. The ecosystem is maturing. But it’s not saturated. Becoming deeply competent in Rust today feels like investing early in something foundational.

And beyond market thinking, it feels intellectually honest. Rust makes you slower in the beginning. It removes shortcuts. It punishes careless assumptions. It makes you confront complexity directly instead of hiding it under runtime flexibility.

It is not beginner friendly. It is not easy. And that’s precisely why it’s valuable.

If someone wants instant feedback, fast feature velocity, and quick wins, Rust will feel like a nightmare. The compiler errors can be brutal. You might write code that logically makes sense, and Rust will reject it for lifetime reasons you didn’t even consider. It feels unfair at first.

But over time, you realize it’s making you sharper.

You start anticipating ownership issues before writing code. You design APIs differently. You think about shutdown signals. You think about memory footprint. You think about concurrency boundaries. You think about determinism.

You stop assuming things will work. You prove that they will.

That’s a different mindset.

I am not abandoning TypeScript. That would be unrealistic. The browser speaks JavaScript. Frontend ecosystems are deeply tied to it. Even if you use WebAssembly, JavaScript is still there. So TypeScript will remain part of my workflow.

But I don’t want it to be my only layer of competence.

Relying solely on TypeScript feels narrow. Rust feels expansive.

This shift is not about rejecting comfort for the sake of pain. It’s about choosing growth over convenience. I know this year will be slower in terms of output. I know I will spend more time reading compiler errors than shipping features. But I also know that the understanding I build will compound.

In a world where AI can generate boilerplate instantly, the real advantage is not how fast you can scaffold an app. It’s how deeply you understand the systems you are building on.

Rust pushes you toward that depth whether you like it or not.

And maybe that’s what I need right now.

Not speed. Not comfort. Not instant validation.

Depth.

That’s why I’m shifting.




