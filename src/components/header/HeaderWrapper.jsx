import { Typography, Breadcrumbs, Box, Link } from "@mui/material"

export default function HeaderWrapper() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4">Booldook</Typography>

      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="//naver.com">
          SHOP
        </Link>
        <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
          BOARD
        </Link>
        <Typography>CHAT</Typography>
      </Breadcrumbs>
    </Box>
  )
}
