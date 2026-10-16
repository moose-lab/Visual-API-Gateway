from __future__ import annotations

from datetime import date
from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class Address(BaseModel):
    model_config = ConfigDict(extra="forbid")

    line1: str | None = None
    line2: str | None = None
    city: str | None = None
    state: str | None = Field(None, description="Two-letter abbreviation")
    zip_code: str | None = None
    country: str | None = None


class ContactPoint(BaseModel):
    model_config = ConfigDict(extra="forbid")

    system: Literal["phone", "email", "fax", "sms", "url"] | None = None
    value: str | None = None
    use: Literal["home", "work", "mobile", "temp"] | None = None


class Person(BaseModel):
    model_config = ConfigDict(extra="forbid")

    first_name: str | None = None
    last_name: str | None = None
    middle_name: str | None = None
    date_of_birth: date | None = None
    gender: Literal["male", "female", "other", "unknown"] | None = None
    race: (
        Literal[
            "white",
            "black",
            "asian",
            "aian",
            "nhpi",
            "other",
        ]
        | None
    ) = Field(
        None,
        description="aian=American Indian/Alaska Native, nhpi=Native Hawaiian/Pacific Islander",
    )
    ethnicity: Literal["hispanic", "non_hispanic"] | None = Field(
        None,
        description="hispanic=Hispanic or Latino, non_hispanic=Not Hispanic or Latino",
    )
    language: str | None = Field(None, description="e.g. English, Spanish")
    address: Address | None = None
    contact: list[ContactPoint] = Field(default_factory=list)


class ReleaseParty(BaseModel):
    """Party authorized to receive or disclose PHI."""

    model_config = ConfigDict(extra="forbid")

    first_name: str | None = None
    last_name: str | None = None
    middle_name: str | None = None
    credentials: str | None = Field(None, description="e.g. MD, Esq.")
    organization: str | None = None
    address: Address | None = None
    contact: list[ContactPoint] = Field(default_factory=list)
    relationship: str | None = Field(
        None, description="Relationship to patient, e.g. attorney, spouse"
    )


class AuthorizedRepresentative(BaseModel):
    model_config = ConfigDict(extra="forbid")

    first_name: str | None = None
    last_name: str | None = None
    middle_name: str | None = None
    relationship: str | None = Field(None, description="e.g. parent, guardian, power of attorney")
    contact: list[ContactPoint] = Field(default_factory=list)


class HipaaRelease(BaseModel):
    """HIPAA Authorization to Release / Disclose PHI."""

    model_config = ConfigDict(extra="forbid")

    subject: Person | None = Field(None, description="Patient whose PHI is being released")
    authorized_representative: AuthorizedRepresentative | None = Field(
        None, description="Person signing on behalf of the patient"
    )
    receiver: ReleaseParty | None = Field(None, description="Party authorized to receive PHI")
    disclosing_party: ReleaseParty | None = Field(
        None, description="Provider/facility releasing PHI"
    )
    purpose: str | None = Field(None, description="Purpose of disclosure")
    information_disclosed: list[str] = Field(
        default_factory=list,
        description="Record categories authorized for release",
    )
    record_period_start: date | None = None
    record_period_end: date | None = None
    effective_period_start: date | None = Field(None, description="When authorization takes effect")
    effective_period_end: date | None = Field(None, description="When authorization expires")
    expiration_event: str | None = Field(
        None, description="Event-based expiration if no fixed date"
    )
    redisclosure_permitted: bool | None = None
    right_to_revoke_acknowledged: bool | None = None
    signature_date: date | None = None
    signed_by_name: str | None = Field(
        None, description="Name of signer (patient or representative)"
    )
    witness_name: str | None = None
    witness_signature_date: date | None = None
