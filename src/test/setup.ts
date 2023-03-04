import "@testing-library/jest-dom"

import { randomUUID } from "node:crypto"
window.crypto.randomUUID = randomUUID
