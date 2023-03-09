import TopNavBar from "./TopNavBar";
import SideNavBar from "./SideNavBar";
import StatisticNavBar from "./StatisticNavBar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function CommonLayout({ children }) {
  return (
    <div>
      <Grid2 container>
        <Grid2 xs={12}>
          <TopNavBar />
        </Grid2>
        <Grid2 item xs={2}>
          <SideNavBar />
        </Grid2>
        <Grid2 item xs={10}>
          <StatisticNavBar />
          {children}
        </Grid2>
      </Grid2>
    </div>
  );
}
