import { Link } from "react-router-dom"
import { Grid, GridItem3 } from "../design/Grid"

export const Menu: React.FC<{}>
= () => {
  return (
    <Grid>
      <GridItem3>
        <Link to="music">
          music
        </Link>
      </GridItem3>

      <GridItem3>
        <Link to="playlist">
          playlist
        </Link>
      </GridItem3>

      <GridItem3>
        <Link to="que">
          que
        </Link>
      </GridItem3>
    </Grid>
  )
}