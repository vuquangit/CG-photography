import { people } from '@/__mocks__/data'

export default function handler(req, res) {
  res.status(200).json(people)
}
