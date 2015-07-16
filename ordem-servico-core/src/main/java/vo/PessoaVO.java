package vo;

import util.PapelEnum;


public class PessoaVO {
	
	private String nome;
	private Enum<PapelEnum> papel;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Enum<PapelEnum> getPapel() {
		return papel;
	}
	public void setPapel(Enum<PapelEnum> papel) {
		this.papel = papel;
	}
}
