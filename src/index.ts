/**
 * Public parser API.
 */

// ── Errors ───────────────────────────────────────────────────────────
export {
  AgentSessionParserError,
  IndexError,
  ParseError,
  SessionNotFoundError,
  StorageError,
  ToolNotAvailableError,
  UnknownSourceError,
} from "./errors.js";

// ── Parsers ──────────────────────────────────────────────────────────
export * from "./parsers/index.js";

// ── Types ────────────────────────────────────────────────────────────
export type { ContentBlock, TextBlock } from "./types/content-blocks.js";
export type {
  AgentSessionParserContext,
  Message,
  ParsedAgentConversation,
  SessionSource,
  SessionParseOptions,
  UnifiedSession,
} from "./types/index.js";
export { TOOL_NAMES } from "./types/tool-names.js";

// ── Discovery / Extraction ───────────────────────────────────────────
export {
  findSession,
  formatSession,
  listSessions,
  parseSession,
  sessionsToJsonl,
} from "./utils/index.js";
