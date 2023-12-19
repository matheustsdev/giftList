const colors = {
    slate50: "#F8FAFC",
    slate100: "#F1F5F9",
    slate200: "#E2E8F0",
    slate300: "#CBD5E1",
    slate400: "#94A3B8",
    slate500: "#64748B",
    slate600: "#475569",
    slate700: "#334155",
    slate800: "#1E293B",
    slate900: "#0F172A",
    slate950: "#020617",
    green50: "#F0FDF4",
    green100: "#DCFCE7",
    green200: "#BBF7D0",
    green300: "#86EFAC",
    green400: "#4ADE80",
    green500: "#22C55E",
    green600: "#16A34A",
    green700: "#15803D",
    green800: "#166534",
    green900: "#14532D",
    green950: "#052E16"

}

export const theme = {
    colors: {
        ...colors,
        primary: colors.green500,
        primaryHover: colors.green600,
        background: colors.slate950
    },
    borderRadius: {
        small: "0.25em",
        medium: "0.5em",
        large: "1em"
    },
    breakpoint: {
        mobile: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px"
    }
}