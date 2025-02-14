export type ChatMessage = {
  userMessage: string;
  agentMessage: string;
  loadings: boolean;
};

export interface AgentResponse {
  id: string;
  timestamp: Date;
  content: string;
}
