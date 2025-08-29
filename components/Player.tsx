"use client"

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {
    const player = usePlayer();
    const {song} = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song!);

    if (!song || !songUrl || !player.activeId) {
        return null;
    }

    return (
        <div 
          className="
            fixed
            bottom-0
            bg-black
            w-full
            py-2
            h-[80px]
            px-4">
            <PlayerContent 
              key={songUrl} /*super important note: if they key changes this whole PlayerContent component destroys itself which is needed*/
              song={song}
              songUrl={songUrl}/>
        </div>
    );
};

export default Player;