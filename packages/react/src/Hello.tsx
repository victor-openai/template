import { defaultGreeting } from '@template/core'
import { JSX } from 'react'

export interface HelloProps { name?: string }

export function Hello({ name = defaultGreeting.text }: HelloProps): JSX.Element {
  return <span>{name}</span>
}
