package vo;

import java.util.Date;

public class OrdemServicoVO {
	
	private long numOrdem;
	private String solicitante;    
    private Date dataAbertura;
    private String descricao;     private String status;    private String responsavel;    private Date dataAtualizacaoStatus;   
    
	public long getNumOrdem() {
		return numOrdem;
	}
	public void setNumOrdem(long numOrdem) {
		this.numOrdem = numOrdem;
	}
	public String getSolicitante() {
		return solicitante;
	}
	public void setSolicitante(String solicitante) {
		this.solicitante = solicitante;
	}
	public Date getDataAbertura() {
		return dataAbertura;
	}
	public void setDataAbertura(Date dataAbertura) {
		this.dataAbertura = dataAbertura;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getResponsavel() {
		return responsavel;
	}
	public void setResponsavel(String responsavel) {
		this.responsavel = responsavel;
	}
	public Date getDataAtualizacaoStatus() {
		return dataAtualizacaoStatus;
	}
	public void setDataAtualizacaoStatus(Date dataAtualizacaoStatus) {
		this.dataAtualizacaoStatus = dataAtualizacaoStatus;
	}
}