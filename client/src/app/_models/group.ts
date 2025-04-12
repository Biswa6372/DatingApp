export interface Group{
    name: string;
    connections: Connection[]
}

export interface Connection{
    ConnectionId: string;
    username: string;
}