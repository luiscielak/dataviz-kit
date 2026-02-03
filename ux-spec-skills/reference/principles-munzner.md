# Munzner — Why, what, how (task, data, encoding)

**Source**: Tamara Munzner, *Visualization Analysis & Design*.

---

## Core idea

**Three questions** must align:

- **Why (task)**: What is the user trying to do? Discover (present) or produce (explore)? What is the target (value, trend, distribution, etc.)? What is the scope (one item, few, many, all)?
- **What (data)**: What are the attributes and types? Key vs value; quantitative, ordinal, nominal; number of items and cardinality.
- **How (encoding)**: What mark (point, line, area, …) and which channels (position, length, color, …)? Encoding must match task and data.

---

## For specs

- For each view or chart, specify: (1) the task (why), (2) the data (what), (3) the encoding (how). Validate that they align—e.g. “compare 5 categories” (task) + “category nominal, value quantitative” (data) → bar chart with length (how).
- Use the 30-dataviz-rigor skill **munzner-why-what-how** to check alignment and recommend encoding when the spec is vague or mismatched.
- Avoid choosing a chart type first; derive it from task and data.

---

## Quick checklist

- [ ] Task (why) is stated for each view.
- [ ] Data (what)—attributes and types—is stated.
- [ ] Encoding (how)—mark and channel—matches task and data.
- [ ] No “chart type first” without a stated task and data type.
