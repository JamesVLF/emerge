---
title: "Adaptive Burst Detection in Neural Organoids"
description: "Developing threshold methods that adapt to individual organoid characteristics rather than using fixed parameters"
pubDate: 2025-11-20
tags: ["electrophysiology", "burst-analysis", "organoids", "parkinson's"]
---

## The Challenge

Traditional burst detection methods use fixed thresholds across all recordings, but we've found that midbrain organoids show significant baseline variability in their electrical activity patterns. A one-size-fits-all approach misses critical neural dynamics.

## Our Approach

We developed an adaptive RMS-based threshold method that:

- Calculates baseline activity characteristics for each individual organoid
- Adjusts detection thresholds based on organoid-specific noise floors
- Accounts for temporal drift in recording quality
- Preserves biological variability while reducing technical noise

## Key Findings

Our analysis revealed that 6-OHDA treatment doesn't simply reduce activity—it fundamentally reorganizes network dynamics. Treated organoids show:

- Increased burst-to-burst variability
- Loss of stereotyped temporal coordination
- Network fragmentation patterns

## Next Steps

We're now implementing these methods in our containerized analysis pipeline for deployment on the NRP Kubernetes cluster. This will enable large-scale analysis across multiple experimental batches.

---

*This work is part of my dissertation research in the Sharf Lab at UC Santa Cruz.*
