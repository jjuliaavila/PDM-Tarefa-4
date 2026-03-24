import { Song } from '../models/Song';

let songs: Song[] = [];
let proximoId = 1;
  
export const SongBusiness = {
  listar(): Song[] {
    return [...songs];
  },
    
  adicionarSong(nome: string): Song {
    if (nome.trim().length <= 2) {
      throw new Error("Nome deve ter mais de 2 caracteres");
    }
    
    const songExistente = SongBusiness.listar().find(
      (song) => song.nome.toLowerCase() === nome.trim().toLowerCase()
    );

    if (songExistente) {
      throw new Error("Já existe uma música com esse nome na lista");
    }
      
    const novo: Song = { id: proximoId++, nome};
    songs.push(novo);
    return novo;
  },

  removerSong(id: number): void {
    songs = songs.filter((song) => song.id !== id);
  },
};
    
