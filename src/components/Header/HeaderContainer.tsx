import * as React from 'react'
import { useState, useEffect } from 'react';

import{ HeaderProps } from '.././types'

export const HeaderContainer = ({user}: HeaderProps) =>
  <h2>{ user.email }</h2>

export default HeaderContainer;
