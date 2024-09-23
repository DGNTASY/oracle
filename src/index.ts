import "dotenv/config"
import { createClient } from "@supabase/supabase-js";
import { Connection } from "@solana/web3.js";

// Supabase
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
if (SUPABASE_URL == null || SUPABASE_ANON_KEY == null) {
    throw new Error("Error loading supabase credentials");
}
const SUPABASE = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type ScorePlayer = {
    PublicKey: string,
    Score: number
}

async function getTopThreePlayers(): Promise<ScorePlayer[] | null> {
    const query = `
    WITH RankedScores AS (
      SELECT
        PublicKey,
        score,
        DENSE_RANK() OVER (ORDER BY score DESC) AS rank_num
      FROM Users
    )
    SELECT PublicKey, score
    FROM RankedScores
    WHERE rank_num <= 3;`

    const {data, error} = await SUPABASE.rpc('execute_sql', { query });
    if (error) {
        console.log(`Postgress error: ${error}`);
        return null
    }

    const scorePlayers = (data as ScorePlayer[]).map((d) => {
        
    })

    return [];
}

// Solana
const HELIUS_RPC = process.env.HELIUS_RPC_DEVNET;
if (HELIUS_RPC == null) {
    throw new Error("Error loading helius rpc");
}
const CONNECTION = new Connection(HELIUS_RPC, "confirmed");

async function main() {
    await sleep(10_000);
    console.log("Timeout")
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

main();