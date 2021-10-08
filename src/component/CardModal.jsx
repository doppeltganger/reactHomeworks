import React from 'react';
import '../styles/_App.scss';

function CardModal({userName, modalState, setModalState}) {
	const containerClass = ['modal'];

	if (modalState) {
		containerClass.push('modal__show');
	}

	return (
		<div>
			<div className={containerClass.join(' ')} onClick={() => setModalState(false)}>
				<div className="modal__body" onClick={(event) => event.stopPropagation()}>
					<div className="modal__content">
						<div onClick={() => setModalState(false)} className="modal__close-button">&times;</div>
						<h2 className="modal__title">Detailed information:</h2>
						
						<div className="card">
							<div className="card__visual">
								<img src={userName.picture} alt="" />
							</div>

							<div className="card__body">
								<p><span>name:</span> {userName.name}</p>
								<p><span>age:</span> {userName.age}</p>
								<p><span>gender:</span> {userName.gender}</p>
								<p><span>balance:</span> {userName.balance}</p>
								<p><span>eye color:</span> {userName.eyeColor}</p>
								<p><span>phone:</span> {userName.phone}</p>
								<p><span>email:</span> {userName.email}</p>
								<p><span>address:</span> {userName.address}</p>
								<p><span>company:</span> {userName.company}</p>
								<p><span>about:</span> {userName.about}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardModal;