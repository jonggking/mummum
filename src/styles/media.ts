const BREAKPOINT_MEDIAQUERY = {
  desktop: 820,
  mobile: 250,
};

export const media = {
  desktop: `@media (min-width: ${BREAKPOINT_MEDIAQUERY.desktop}px)`,
  mobile: `@media (max-width: ${BREAKPOINT_MEDIAQUERY.desktop - 1}px) 
                  and (min-width: ${BREAKPOINT_MEDIAQUERY.mobile}px)`,
};
