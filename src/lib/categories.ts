import { productGroups } from "./navigation";

export type Crumb = { no: number; name: string };

/**
 * Resolve a category number into its breadcrumb path (group → category → sub)
 * and the set of all descendant category numbers (used to filter products).
 */
export function getCategoryInfo(no: number | undefined):
  | { breadcrumb: Crumb[]; descendants: Set<number> }
  | null {
  if (no == null) return null;

  for (const group of productGroups) {
    if (group.no === no) {
      return { breadcrumb: [group], descendants: descendantsOfGroup(group) };
    }
    for (const cat of group.categories) {
      if (cat.no === no) {
        const ds = new Set<number>([cat.no]);
        cat.children?.forEach((s) => ds.add(s.no));
        return { breadcrumb: [group, cat], descendants: ds };
      }
      for (const sub of cat.children ?? []) {
        if (sub.no === no) {
          return { breadcrumb: [group, cat, sub], descendants: new Set([sub.no]) };
        }
      }
    }
  }
  return null;
}

function descendantsOfGroup(group: (typeof productGroups)[number]): Set<number> {
  const ds = new Set<number>([group.no]);
  for (const cat of group.categories) {
    ds.add(cat.no);
    cat.children?.forEach((s) => ds.add(s.no));
  }
  return ds;
}
