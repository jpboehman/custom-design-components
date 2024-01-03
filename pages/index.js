import * as React from 'react';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import { css } from '@emotion/react';

// Table imports - MUI

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Sandbox() {
  return (
    <>
      <div className={styles.pageTitle}>
        <h1>Template Sandbox</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      
      {/* TODO: Practice here - creating custom hooks, react state management, etc */}
      {/* <Grid
        container
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          
        `}
      > */}
        <div>
          Hello World!
        </div>
      {/* </Grid> */}
    </>
  );
}
