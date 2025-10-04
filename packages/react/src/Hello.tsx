import { defaultGreeting } from '@victor-template/core-2'
import { JSX } from 'react'

export interface HelloProps { name?: string }

export function Hello({ name = defaultGreeting.text }: HelloProps): JSX.Element {
  return <span>{name}</span>
}
